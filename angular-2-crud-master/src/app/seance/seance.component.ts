import {Component, OnInit, OnChanges} from '@angular/core';
import {Router} from '@angular/router';
import {SeanceService} from './seance.service';
import {Seance} from './seance';

@Component({
    selector: 'app-seance',
    templateUrl: './seance.component.html',
    
})
export class SeanceComponent implements OnInit, OnChanges{

    seances: Seance[];
    statusMessage: string;
    seance= new Seance();
    
    constructor(private _seanceService: SeanceService,
                private _router: Router){}

    ngOnInit(): void {
        console.log("calling ngOnInit()::::");
        this.getseances();
    }

    getseances(): void{
        console.log("Inside getseances():::::")
        this._seanceService.getAllSeances()
            .subscribe((seanceData) => this.seances = seanceData,
            (error) =>{
                console.log(error);
                this.statusMessage = "Problem with service. Please try again later!";
            }
        );
        console.log("end of getseances():::::");
    }

    addseance(): void{
        console.log("inside the addseance()::::::")
        this._seanceService.addSeance(this.seance)
            .subscribe((response) => {console.log(response); this.getseances();this.reset();},
            (error) =>{
                console.log(error);
                this.statusMessage = "Problem with service. Please try again later!";
            }
        );   
        
        console.log("end of addseance()::::");
        //this._router.navigate(['/seances']);
    }

    private reset(){
      console.log("inside the reset():::::::");
      this.seance.id = null;
      this.seance.matiere = null;
      this.seance.salle = null;
      this.seance.duree = null;
      


        console.log("end of reset():::::::");
    }

    ngOnChanges(changes:any) {
        console.log("calling ngOnChanges()::::::::");
    }

    deleteseance(seanceId: string){
        console.log("Inside the deleteseance()::::seance id::::"+seanceId);
        this._seanceService.deleteSeance(seanceId)
            .subscribe((response) => {console.log(response); this.getseances();},
            (error) =>{
                console.log(error);
                this.statusMessage = "Problem with service. Please try again later!";
            });
            this.reset();
            console.log("end of deleteseance():::::::");
    }

    getseance(seanceId: string){
        console.log("Inside the updateseance()::::::seance id::::"+seanceId);
        this._seanceService.getSeanceById(seanceId)
            .subscribe((seanceData) => {this.seance= seanceData; this.getseances(); }),
            (error) => {
                console.log(error);
                this.statusMessage = "Problem with service. Please try again later!";
            }
        this.reset();    
        console.log("end of updateseance()::::::");
    }
}
