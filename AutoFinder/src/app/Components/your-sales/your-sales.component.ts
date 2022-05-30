import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeleteVehicleService } from 'src/app/Services/delete-vehicle.service';
import { StoreVehicleService } from 'src/app/Services/store-vehicle.service';
import { YourSalesService } from 'src/app/Services/your-sales.service';

@Component({
  selector: 'app-your-sales',
  templateUrl: './your-sales.component.html',
  styleUrls: ['./your-sales.component.scss']
})
export class YourSalesComponent implements OnInit {

  public session_user:any = []

  public your_sales:any = []

  constructor(private STV: StoreVehicleService, private YS: YourSalesService, private DV: DeleteVehicleService, private router: Router) { }

  ngOnInit(): void {
    this.session_user = JSON.parse(sessionStorage.getItem('c_user') as string)
    this.YS.yourSales(this.session_user[0].userID).subscribe((result)=>{
        this.your_sales = result
        console.log(this.your_sales)
    })
  }

  DeleteVehicle(data:any){
      this.DV.deleteVehicle(data)
      //window.location.reload()
      
      this.router.navigateByUrl("", {skipLocationChange: true}).then(() => {
        this.router.navigate(["../YourSales"])
      })
  }

  SetStoredVehicle(data:any){
    this.STV.setStoredVehicle(data)
  }

}
