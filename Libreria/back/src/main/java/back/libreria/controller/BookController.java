package back.libreria.controller;


import back.libreria.entities.Book;
import back.libreria.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/books")
public class BookController {

    @Autowired
    private BookRepository bookRepository;

    @PostMapping("/")
    public void createBook(@RequestBody Book book){
        bookRepository.save(book);
    }
    @DeleteMapping("/{id}")
    public void deleteBook(@PathVariable("id") Integer id){
        Book b = new Book();
        b.setId(id);
        b.setId(id);
        bookRepository.delete(b);
    }
    @GetMapping
    public List<Book> getLibros(){
        List<Book> books = bookRepository.findAll();
        return books;
    }
    @PutMapping("/{id}")
    public void updateBook(@RequestBody Book book,@PathVariable("id")Integer id){
        book.setId(id);
        bookRepository.save(book);
    }
}
