import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-agent',
  templateUrl: './agent.page.html',
  styleUrls: ['./agent.page.scss'],
})
export class AgentPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  back(){

    this.router.navigate(['/login']);
  }
}
