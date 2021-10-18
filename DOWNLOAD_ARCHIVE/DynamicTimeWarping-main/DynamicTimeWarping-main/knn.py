from numba import jit, guvectorize, float64, int32
import numpy as np

@guvectorize([(float64[:], float64[:], float64, float64, float64[:], float64[:])], '(x),(y),(),(),(z)->(z)')
def nearest_neighbors(data, query, band, query_multiplier, out_size, out):
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
    for n in range(data.shape[0]):
        print('\r' + str(round(((n+1)/data.shape[0])*100, 2)) + '%', end='')
        mi = 9999999
        ma = 0
        for k in range(int(query.shape[0]-(query.shape[0]*query_multiplier)), int(query.shape[0]+(query.shape[0]*query_multiplier))+1):
            if k+n >= data.shape[0]:
                break
            if data[n+k] <= mi:
                mi = data[n+k]
            if data[n+k] >= ma:
                ma = data[n+k]
        for k in range(int(query.shape[0]-(query.shape[0]*query_multiplier)), int(query.shape[0]+(query.shape[0]*query_multiplier))+1):
            if n+k >= data.shape[0]:
                break
            try:
                data_size = k + 1
                res = np.zeros((data_size, query.shape[0]))
                band = band * query.shape[0]
                for i in range(data_size):
                    center = (i * query.shape[0]) / data_size
                    lastCenter = ((i - 1) * query.shape[0]) / data_size
                    start = max(center - band, 0)
                    stop = min(center + band, query.shape[0])
                    lastStart = max(lastCenter - band, 0)
                    lastStop = min(lastCenter + band, query.shape[0])
                    min_col = min_dist
                    for j in range(start, stop):
                        value = abs(((data[i + n] - mi) / (ma - mi)) - (
                                    (query[j] - qmi) / (qma - qmi)))
                        min_adj = -1
                        if j - 1 >= start:
                            min_adj = res[i][j - 1]
                        if i - 1 >= 0:
                            if j >= int(lastStart) and j < int(lastStop) and (res[i - 1][j] < min_adj or min_adj < 0):
                                min_adj = res[i - 1][j]
                            if j - 1 >= int(lastStart) and j - 1 < int(lastStop) and (
                                    res[i - 1][j - 1] < min_adj or min_adj < 0):
                                min_adj = res[i - 1][j - 1]
                        if min_adj >= 0:
                            res[i, j] = value + min_adj
                        else:
                            res[i, j] = value
                        if res[i, j] < min_col:
                            min_col = res[i, j]
                    if min_col > min_dist:
                        res[-1][-1] = -1
                        break
                current = res[-1][-1]
                if current > .1 and current < min_dist:
                    min_dist = current
                    start = n
                    end = n+k
            except:
                pass
    out[0] = min_dist
    out[1] = start
    out[2] = end

dp = []
filepath = 'C:\\Users\\Ian\\Documents\\Portfolio\\projects\\Stock Analysis\\a.txt'
with open(filepath) as fp:
   line = fp.readline()
   while line:
       dp.append(float(line.strip()))
       line = fp.readline()
d = np.array(dp)

# q = np.loadtxt('C:\\Users\\Ian\\Documents\\Portfolio\\projects\\Stock Analysis\\q.txt')
dq = []
filepath = 'C:\\Users\\Ian\\Documents\\Portfolio\\projects\\Stock Analysis\\q.txt'
with open(filepath) as fp:
   line = fp.readline()
   while line:
       dq.append(float(line.strip()))
       line = fp.readline()
q = np.array(dq)
print(d.shape)
print(q.shape)
o = np.zeros((3,))
print(nearest_neighbors(d, q, .2, .2, o))