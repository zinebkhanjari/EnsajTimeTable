import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SeanceService } from './seance.service';
import { Seance} from './seance';
import { Router } from '@angular/router';


@Component({
    selector: 'time-table',
    templateUrl: './timeTable.component.html',
    
})
export class TimeTableComponent implements OnInit{
    seance = new Seance();
    statusMessage: string;
    seances: Seance[];
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
}
