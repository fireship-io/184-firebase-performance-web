import { Component } from '@angular/core';
import { AngularFirePerformance } from '@angular/fire/performance';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {

  constructor(private perf: AngularFirePerformance, private db: AngularFirestore) { }

  items;


  async loadUserData() {
    const perf = this.perf.performance;
    const trace = perf.trace('queryTrace');

    const items = await this.db.collection('items').get().toPromise();
    trace.incrementMetric('totalSize', items.size);
    trace.putMetric('itemsSize', items.size);

    const things = await this.db.collection('things').get().toPromise();
    trace.incrementMetric('totalSize', things.size);
    trace.putMetric('thingsSize', items.size);

    trace.stop();
  }


  traceObservable() {

    this.items = this.db.collection('items').snapshotChanges()
      .pipe(

        // Custom RxJS Operator
        this.perf.trace('itemsQuery')

      );

  }

}
