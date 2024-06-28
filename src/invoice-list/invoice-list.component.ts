import {
  Component,
  computed,
  inject,
  OnDestroy,
  OnInit,
  signal,
  Signal,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { Invoice, INVOICE_STATUS } from '../interface';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'invoice-list',
  standalone: true,
  template: `
  InvoiceListComponent
  `,
})
export class InvoiceListComponent implements OnInit, OnDestroy {
  private route = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private invoiceService = inject(InvoiceService);
  private onDestroy$ = new Subject<void>();

  invoiceList: Signal<Invoice[]> = signal([]);
  invoicesInDone: Signal<Invoice[]> = signal([]);
  totalAmountInDone: Signal<number> = signal(0);

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  backToClientList(): void {
    this.route.navigate(['/']);
  }

  private initSignals(): void {
    this.invoicesInDone = computed(() =>
      this.invoiceList().filter((item) => item.status === INVOICE_STATUS.DONE)
    );
    this.totalAmountInDone = computed(() =>
      this.invoicesInDone().reduce(
        (accumulator, invoice) => accumulator + invoice.amount,
        0
      )
    );
  }
}
