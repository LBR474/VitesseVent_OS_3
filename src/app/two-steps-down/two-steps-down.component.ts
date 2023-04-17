import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  extend,
  injectNgtLoader,
  NgtArgs,
  NgtBeforeRenderEvent,
  NgtPush,
} from 'angular-three';
import { map } from 'rxjs';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

extend(THREE);

@Component({
  standalone: true,
  template: `<ngt-spot-light
          [position]="10"
          angle="0.15"
          penumbra="1"
          color="red"
        ></ngt-spot-light>
        <ngt-point-light [position]="10"></ngt-point-light>
  <ngt-primitive *args="[model$ | ngtPush]" [scale]="1" 
   (beforeRender)="onBeforeRender($any($event))"
  /> `,
  imports: [NgtPush, NgtArgs],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SceneGraphTSD {
  onBeforeRender(event: NgtBeforeRenderEvent<THREE.Mesh>) {
    event.object.rotation.x += 0.01;
  }
  readonly model$ = injectNgtLoader(
    () => GLTFLoader,
    'assets/vitesse_sphere.glb'
  ).pipe(map((model) => model.scene));
}

@Component({
  selector: 'app-two-steps-down',
  templateUrl: './two-steps-down.component.html',
  styleUrls: [],
})
export class TwoStepsDownComponent {
  readonly SceneTSD = SceneGraphTSD;
  
  
}
