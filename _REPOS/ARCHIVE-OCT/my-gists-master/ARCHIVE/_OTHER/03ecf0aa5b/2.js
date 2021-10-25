function mapZip(mapper, list) {
  return map((x) => [x, mapper(x)], list);
}

var list = [1, 2, 3, 4, 5];

mapZip((x) => x ** 2, list);
// [[1,1],[2,4],[3,9],[4,16],[5,25]]
