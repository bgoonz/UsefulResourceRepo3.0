from numba import jit, guvectorize, float64, int32
import numpy as np

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
