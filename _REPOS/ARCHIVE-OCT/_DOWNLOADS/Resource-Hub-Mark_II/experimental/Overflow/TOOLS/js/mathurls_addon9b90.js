document.addEventListener("DOMContentLoaded", function () {
    var visibleCardsSection = document.querySelector("#page-visible-cards");
    if (visibleCardsSection) {
        var visibleCards = visibleCardsSection.querySelectorAll(".publisher-block")
        for (var i = 0; i < visibleCards.length; i++) {
            var visibleCard = visibleCards[i];
            if (visibleCard.dataset['publisher'] == "mathstackexchange") {
                texify_titles(visibleCard);
            }
            else if (visibleCard.dataset['publisher'] == "mathoverflow") {
                texify_titles(visibleCard);
            }
        }

        function texify_titles (card) {
            var links = card.querySelectorAll(".publisher-link");
            for (var i = 0; i < links.length; i++) {
                var link = links[i];
                var linkA = link.querySelector('a');
                renderMathInElement(linkA, {
                    delimiters: [
                        { left: "$", right: "$", display: false }
                    ]
                });
            }
        }
    }
});
