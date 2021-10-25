const Anakin = Skywalker("Anakin");
const Luke = Anakin.map((x) => "Luke");
const Leia = Anakin.map((x) => "Leia");

function nonJedi(who) {
  if (who == "Rey") return Force.of(who);
  return RegularFolk(who);
}

Luke.chain(() => nonJedi("Rey"))
  .chain(() => nonJedi("George Lucas"))
  .map((v) => (w) => console.log("Han shot first."))
  .ap(Force.of("Chewbacca"));
