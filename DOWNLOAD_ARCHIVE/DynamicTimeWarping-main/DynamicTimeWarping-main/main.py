from numba import jit, guvectorize, float64, int32
import numpy as np
import time
from dtw import *

np.set_printoptions(threshold=np.inf)


def dist_slow(data, query, band):
    res = np.zeros((data.shape[0], query.shape[0]))
    band = int(band * query.shape[0])
    for i in range(data.shape[0]):
        center = int((i * query.shape[0]) / data.shape[0])
        start = max(center - band, 0)
        end = min(center + band, query.shape[0])
        for j in range(start, end):
            value = abs(data[i] - query[j])
            if i - 1 >= 0 and j - 1 >= 0:
                value += min(res[i - 1, j - 1], res[i - 1, j], res[i, j - 1])
            elif i - 1 >= 0:
                value += res[i - 1, j]
            else:
                value += res[i, j - 1]
            res[i, j] = value
    return res


# Returns DTW distance matrix, width of warp band is band * length of query
@guvectorize(
    [(float64[:], float64[:], float64, float64[:, :])],
    "(x),(y),()->(x,y)",
    nopython=True,
)
def dist(data, query, band, res):
    band = band * query.shape[0]
    for i in range(data.shape[0]):
        center = (i * query.shape[0]) / data.shape[0]
        lastCenter = ((i - 1) * query.shape[0]) / data.shape[0]
        start = max(center - band, 0)
        end = min(center + band, query.shape[0])
        lastStart = max(lastCenter - band, 0)
        lastEnd = min(lastCenter + band, query.shape[0])
        for j in range(start, end):
            value = abs(data[i] - query[j])
            min_adj = -1
            if j - 1 >= start:
                min_adj = res[i][j - 1]
            if i - 1 >= 0:
                if (
                    j >= lastStart
                    and j < int(lastEnd)
                    and (res[i - 1][j] < min_adj or min_adj < 0)
                ):
                    min_adj = res[i - 1][j]
                if (
                    j - 1 >= lastStart
                    and j - 1 < lastEnd
                    and (res[i - 1][j - 1] < min_adj or min_adj < 0)
                ):
                    min_adj = res[i - 1][j - 1]
            if min_adj >= 0:
                res[i, j] = value + min_adj
            else:
                res[i, j] = value


@guvectorize(
    [
        (
            float64[:],
            float64,
            float64,
            float64[:],
            float64,
            float64,
            float64,
            float64,
            int32,
            int32,
            float64[:],
        )
    ],
    "(x),(),(),(y),(),(),(),(),(),()->(y)",
    nopython=True,
)
def knn(
    data,
    min_data,
    max_data,
    query,
    min_query,
    max_query,
    band,
    cutoff,
    begin,
    end,
    resp,
):
    # begin = p_begin[0]
    # end = p_end[0]
    data_size = end - begin + 1
    res = np.zeros((data_size, query.shape[0]))
    band = band * query.shape[0]
    for i in range(data_size):
        center = (i * query.shape[0]) / data_size
        lastCenter = ((i - 1) * query.shape[0]) / data_size
        start = max(center - band, 0)
        stop = min(center + band, query.shape[0])
        lastStart = max(lastCenter - band, 0)
        lastStop = min(lastCenter + band, query.shape[0])
        min_col = cutoff
        for j in range(start, stop):
            value = abs(
                ((data[i + begin] - min_data) / (max_data - min_data))
                - ((query[j] - min_query) / (max_query - min_query))
            )
            min_adj = -1
            if j - 1 >= start:
                min_adj = res[i][j - 1]
            if i - 1 >= 0:
                if (
                    j >= int(lastStart)
                    and j < int(lastStop)
                    and (res[i - 1][j] < min_adj or min_adj < 0)
                ):
                    min_adj = res[i - 1][j]
                if (
                    j - 1 >= int(lastStart)
                    and j - 1 < int(lastStop)
                    and (res[i - 1][j - 1] < min_adj or min_adj < 0)
                ):
                    min_adj = res[i - 1][j - 1]
            if min_adj >= 0:
                res[i, j] = value + min_adj
            else:
                res[i, j] = value
            if res[i, j] < min_col:
                min_col = res[i, j]
        if min_col > cutoff:
            res[-1][-1] = -1
            break
    resp[0] = res[-1][-1]


# @guvectorize([(float64[:], float64[:], float64, float64, float64[:])], '(x),(y),(),(),(),()->()', nopython=True)
def nearest_neighbors(data, query, band, query_multiplier):
    # res[0] = 999999
    min_dist = 9999999
    start = 0
    end = 0
    qmi = 9999999
    qma = 0
    for n in range(query.shape[0]):
        if query[n] < qmi:
            qmi = query[n]
        if query[n] > qma:
            qma = query[n]
    for i in range(data.shape[0]):
        print("\r" + str(round(((i + 1) / data.shape[0]) * 100, 2)) + "%", end="")
        mi = 9999999
        ma = 0
        for k in range(
            int(query.shape[0] - (query.shape[0] * query_multiplier)),
            int(query.shape[0] + (query.shape[0] * query_multiplier)) + 1,
        ):
            if k + i >= data.shape[0]:
                break
            if data[i + k] <= mi:
                mi = data[i + k]
            if data[i + k] >= ma:
                ma = data[i + k]
        for j in range(
            int(query.shape[0] - (query.shape[0] * query_multiplier)),
            int(query.shape[0] + (query.shape[0] * query_multiplier)) + 1,
        ):
            if i + j >= data.shape[0]:
                break
            current = knn(data, mi, ma, query, qmi, qma, band, min_dist, i, i + j)[0]
            if current > 0.1 and current < min_dist:
                min_dist = current
                start = i
                end = i + j
                # res[0] = current
                # res[1] = i
                # res[2] = j
    return min_dist, start, end


# @jit(nopython=True, parallel=True)
# def dist_p(data, query, band):
#     res = np.zeros((x.shape[0], y.shape[0]))
#     band = (band * query.shape[0])/2
#     for i in range(data.shape[0]):
#         center = (i*query.shape[0])/data.shape[0]
#         start = max(center-band, 0)
#         end = min(center+band, query.shape[0])
#         for j in range(start, end):
#             value = abs(data[i] - query[j])
#             if i-1 >= 0 and j-1 >= 0:
#                 value += min(res[i-1, j-1], res[i-1, j], res[i, j-1])
#             elif i-1 >= 0:
#                 value += res[i-1, j]
#             else:
#                 value += res[i, j-1]
#             res[i, j] = value
#     return res

# d = np.loadtxt('C:\\Users\\Ian\\Documents\\Portfolio\\projects\\Stock Analysis\\a.txt')
dp = []
filepath = "C:\\Users\\Ian\\Documents\\Portfolio\\projects\\Stock Analysis\\a.txt"
with open(filepath) as fp:
    line = fp.readline()
    while line:
        dp.append(float(line.strip()))
        line = fp.readline()
d = np.array(dp)

# q = np.loadtxt('C:\\Users\\Ian\\Documents\\Portfolio\\projects\\Stock Analysis\\q.txt')
dq = []
filepath = "C:\\Users\\Ian\\Documents\\Portfolio\\projects\\Stock Analysis\\q.txt"
with open(filepath) as fp:
    line = fp.readline()
    while line:
        dq.append(float(line.strip()))
        line = fp.readline()
q = np.array(dq)
print(d.shape)
print(q.shape)
print(nearest_neighbors(d, q, 0.2, 0.2))
# x = np.arange(0, 40, 1)
# y = np.arange(20, 30, 1)
# print("Fast DTW:\n" + str(dist(x, y, 1)))
# z = dist(x, y, .4)
# print(z)
# print(z[-1][-1])
# for i in range(z.shape[0]):
#     for j in range(z.shape[1]):
#         try:
#             if z[i][j] > 500 or z[i][j] < -500:
#                 z[i][j] = 0
#             z[i][j] = '{:f}'.format(z[i][j])
#         except:
#             print('e')
# print(z)
#
# x = np.arange(0, 10, 1)
# y = np.arange(20, 25, 1)
# print(dist_slow(x, y, 1))
#
# x = np.arange(0, 40, 1)
# y = np.arange(20, 30, 1)
# print(dtw(x, y, step_pattern=symmetric1, keep_internals=True).costMatrix)
#
# iters = 1000
#
# x = np.arange(0, 90, 1)
# y = np.arange(20, 30, 1)
# total = 0
# for i in range(iters):
#     start = time.time()
#     dist(x, y, .4)
#     end = time.time()
#     total += end - start
# print("Elapsed (vectorized) = %s" % (total/iters))

# x = np.arange(0, 10000, 1)
# y = np.arange(20, 25, .1)
# total = 0
# for i in range(iters):
#     start = time.time()
#     dtw(x, y, step_pattern=symmetric1)
#     end = time.time()
#     total += end - start
# print("Elapsed (slow) = %s" % (total/iters))
