$(document).ready(() => {
  $("code, pre").append(
    '<span class="command-copy" ><i class="fa fa-clipboard" aria-hidden="true"></i></span>'
  );

  $("code span.command-copy").click(function (e) {
    const text = $(this).parent().text().trim(); //.text();
    const copyHex = document.createElement("input");
    copyHex.value = text;
    document.body.appendChild(copyHex);
    copyHex.select();
    document.execCommand("copy");
    console.log(copyHex.value);
    document.body.removeChild(copyHex);
  });

  $("pre span.command-copy").click(function (e) {
    const text = $(this).parent().text().trim();
    const copyHex = document.createElement("input");
    copyHex.value = text;
    document.body.appendChild(copyHex);
    copyHex.select();
    document.execCommand("copy");
    console.log(copyHex.value);
    document.body.removeChild(copyHex);
  });
});
