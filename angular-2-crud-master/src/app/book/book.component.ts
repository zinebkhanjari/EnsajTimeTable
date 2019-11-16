import {Component, OnInit, OnChanges} from '@angular/core';
import {Router} from '@angular/router';
import {BookService} from './book.service';
import {Book} from './book';

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit, OnChanges{

    books: Book[];
    statusMessage: string;
    book = new Book();
    
    constructor(private _bookService: BookService,
                private _router: Router){}

    ngOnInit(): void {
        console.log("calling ngOnInit()::::");
        this.getbooks();
    }

    getbooks(): void{
        console.log("Inside getbooks():::::")
        this._bookService.getAllBooks()
            .subscribe((bookData) => this.books = bookData,
            (error) =>{
                console.log(error);
                this.statusMessage = "Problem with service. Please try again later!";
            }
        );
        console.log("end of getbooks():::::");
    }

    addbook(): void{
        console.log("inside the addbook()::::::")
        this._bookService.addBook(this.book)
            .subscribe((response) => {console.log(response); this.getbooks();this.reset();},
            (error) =>{
                console.log(error);
                this.statusMessage = "Problem with service. Please try again later!";
            }
        );   
        
        console.log("end of addbook()::::");
        //this._router.navigate(['/books']);
    }

    private reset(){
        console.log("inside the reset():::::::");
      this.book.id = null;
      this.book.matiere = null;
      this.book.salle = null;
      this.book.heuredebut = null;
      this.book.heurefin = null;


        console.log("end of reset():::::::");
    }

    ngOnChanges(changes:any) {
        console.log("calling ngOnChanges()::::::::");
    }

    deletebook(bookId: string){
        console.log("Inside the deletebook()::::book id::::"+bookId);
        this._bookService.deleteBook(bookId)
            .subscribe((response) => {console.log(response); this.getbooks();},
            (error) =>{
                console.log(error);
                this.statusMessage = "Problem with service. Please try again later!";
            });
            this.reset();
            console.log("end of deletebook():::::::");
    }

    getbook(bookId: string){
        console.log("Inside the updatebook()::::::book id::::"+bookId);
        this._bookService.getBookById(bookId)
            .subscribe((bookData) => {this.book = bookData; this.getbooks(); }),
            (error) => {
                console.log(error);
                this.statusMessage = "Problem with service. Please try again later!";
            }
        this.reset();    
        console.log("end of updatebook()::::::");
    }
}
