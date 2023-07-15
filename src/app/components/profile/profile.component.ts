import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/user';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  currentUser: User = {};
  constructor(
    public authService: AuthService,
    private actRoute: ActivatedRoute
  ) {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.authService.getUserProfile(id).subscribe((res) => {
      this.currentUser = res.msg;
    });
  }
  ngOnInit() {}
}
