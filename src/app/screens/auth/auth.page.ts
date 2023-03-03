import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { signIn } from 'src/app/api.constatnt';
import { DataService } from 'src/app/shared/services/data.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { ToasterServive } from 'src/app/shared/services/toaster.service';
import { emailValidator } from 'src/app/shared/validators/app.validators';

// import { Keyboard } from '@capacitor/keyboard';
import { LoadingController } from '@ionic/angular';



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
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.initForm();
    this.createLoginForm();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/screens/issues';

    // Keyboard.addListener('keyboardWillShow', info => {
    //   console.log('keyboard will show with height:', info.keyboardHeight);
    // });
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
  // let httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  // };
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
      this.toasterServices.success('top', 'Sign in is successfuly');
      this.router.navigateByUrl(this.returnUrl);
    }
  }, error => {
    loading.dismiss();
  });
  // this.router.navigate(['/screens/issues'])
  }

}
