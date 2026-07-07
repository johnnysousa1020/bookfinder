const API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY

export async function searchBooks(query) {
    const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`
    )

    const data = await response.json();

    console.log(data)
    return data;
}

export async function getBookByld(id) {
    const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes/${id}?key=${API_KEY}`
    )

    const data = await response.json()
    return data;
}