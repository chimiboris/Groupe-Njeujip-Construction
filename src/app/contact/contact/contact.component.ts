import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactForm: FormGroup;

  constructor() {
    // Définir les champs du formulaire et leurs validations
    this.contactForm = new FormGroup({
      nom: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      message: new FormControl('', [Validators.required, Validators.minLength(10)]),
    });
  }

  // Méthode pour soumettre le formulaire
  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Formulaire soumis avec succès :', this.contactForm.value);
    } else {
      console.log('Le formulaire est invalide.');
    }
  }


  // contactForm = {
  //   name: '',
  //   email: '',
  //   message: ''
  // };

  // submitForm() {
  //   console.log('Form submitted:', this.contactForm);
  //   // Ajouter une logique de traitement des formulaires ici
  // }

}
