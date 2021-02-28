import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
    tl.to('.hide-text', { y: '0%', durations: 1, stagger: 0.25 })
    tl.to('.transition', { y: '-100%', durations: 1, delay: 0.5 })
    tl.to('.intro', { y: '-100%', durations: 1.5, }, "-=.3")
    tl.fromTo('.name', { opacity: 0 }, { opacity: 1, duration: 1 })
    tl.fromTo('.my-image', {height:"0%"},{height:"80%" , duration:3.5}, "-=1" )
    tl.fromTo('.my-image', {width:"100%"},{width:"80%" , duration:1})
    tl.to('.CTA', { opacity: '1', durations: 1, })
  }

}
