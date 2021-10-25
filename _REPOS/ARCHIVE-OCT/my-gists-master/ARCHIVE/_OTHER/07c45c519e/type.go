// By Type
// Go playground https://play.golang.org/p/lJOCJAq8WL
package main

import "fmt"

type ErrorX struct{}

func (e *ErrorX) Error() string {
	return "It's error X"
}

type ErrorY struct{}

func (e *ErrorY) Error() string {
	return "It's error Y"
}

func GetErrorX() error {
	return &ErrorX{}
}

func main() {
	err := GetErrorX()
	switch err.(type) {
	case *ErrorX:
		fmt.Println("It's error X")
	case *ErrorY:
		fmt.Println("It's error Y")
	default:
		fmt.Printf("Error, %s", err)
	}
}
