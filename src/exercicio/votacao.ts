type VotationOption = {
  numberOfVotes: number;
  option: string;
};

export class Votation {
  private _votationOptions: VotationOption[] = [];
  constructor(public details: string) {}

  addVotationOption(votationOption: VotationOption): void {
    this._votationOptions.push(votationOption);
  }

  vote(votationIndex: number): void {
    if (!this._votationOptions[votationIndex]) return;
    this._votationOptions[votationIndex].numberOfVotes += 1;
  }

  get votationOptions(): VotationOption[] {
    return this._votationOptions;
  }
}

export class VotationApp {
  private votations: Votation[] = [];

  addVotation(votation: Votation): void {
    this.votations.push(votation);
  }

  showVotations(): void {
    for (const votation of this.votations) {
      console.log(votation.details);
      for (const votationOption of votation.votationOptions) {
        console.log(votationOption.option, votationOption.numberOfVotes);
      }
    }
  }
}

const votation1 = new Votation(
  'Qual a sua linguaguem de programacao preferida?',
);
votation1.addVotationOption({ option: 'JS', numberOfVotes: 2 });
votation1.addVotationOption({ option: 'TS', numberOfVotes: 1 });
votation1.addVotationOption({ option: 'PY', numberOfVotes: 4 });

votation1.vote(0);
votation1.vote(1);
votation1.vote(2);

const votationApp = new VotationApp();
votationApp.addVotation(votation1);
votationApp.showVotations();
