import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { signIn } from 'src/app/api.constatnt';
import { DataService } from 'src/app/shared/services/data.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { ToasterServive } from 'src/app/shared/services/toaster.service';
import { emailValidator } from 'src/app/shared/validators/app.validators';
import { LoadingController } from '@ionic/angular';
import { AuthService } from './services/auth.service';



@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  loginForm!: FormGroup;
  email!: FormControl;
  password!: FormControl;
  returnUrl!: string;

  constructor(
    private dataService: DataService,
    private storage: StorageService,
    private router: Router,
    private route: ActivatedRoute,
    private toasterServices: ToasterServive,
    private loadingCtrl: LoadingController,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.initForm();
    this.createLoginForm();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/screens/issues';
  }

  initForm() {
    this.email = new FormControl('', [Validators.required, emailValidator]);
    this.password = new FormControl('', Validators.required);
  }

  createLoginForm() {
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password,
  });

    this.loginForm.valueChanges.subscribe();
  }

  async loginHandler() {
  const loading = await this.loadingCtrl.create({
    message: 'Loading...',
  });
  loading.present();

  this.dataService
    .post(`${signIn}`, this.loginForm.value)
    .subscribe(async (response: any) => {
    loading.dismiss();
    if (response.token) {
      this.storage.setAccessToken(response['token']);
      this.authService.userInfo.next(JSON.parse(localStorage.getItem('user') || '{}'))
      this.toasterServices.success('top', 'Sign in is successfuly');
      this.router.navigateByUrl(this.returnUrl);
    }
  }, (error) => {
    console.log(error)
    loading.dismiss();
  });
  // this.router.navigate(['/screens/issues'])
  }

}
