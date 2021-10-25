import itertools
import operator


"""
uncommented solution is O(n^k)


can we make the commented solution work for O(n log n)?

"""
def csGroupAnagrams(strs: list) -> list:
    group = {}
    output = []
    k = len(strs)
    
    for i in range(k):
        group["".join(sorted(strs[i]))] = [x for x in strs if sorted(x) == sorted(strs[i])]
        
    for i in group.values():
        output.append(i)
        
    
    return output
    
    # can we fix this then?
    # return [
    #     [v for _, v in group]
    #     for _, group in itertools.groupby(
    #         sorted(("".join(sorted(v)),= v) for v in strs),
    #         key=operator.itemgetter(0)
    #     )
    # ]