package main

import (
	"fmt"
	"net/http"
)

type RedirectHandler struct {
	Counter chan string
}

func (handler RedirectHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	url := getUrl(r)
	go func() { handler.Counter <- url }()
	http.Redirect(w, r, url, 301)
}

type StatsHandler struct {
	Urls map[string]int
}

func (handler StatsHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	url := getUrl(r)
	fmt.Fprintf(w, "Count: %d", handler.Urls[url])
}

func feedCounter(counter chan string, urls map[string]int) {
	for url := range counter {
		urls[url] += 1
	}
}

func getUrl(r *http.Request) string {
	queryString := r.URL.Query()
	return fmt.Sprintf("%s", queryString["u"])
}

func main() {
	counter := make(chan string)
	urls := make(map[string]int)
	defer close(counter)

	go feedCounter(counter, urls)

	http.Handle("/", RedirectHandler{Counter: counter})
	http.Handle("/stats/", StatsHandler{Urls: urls})
	http.ListenAndServe(":8080", nil)
}
