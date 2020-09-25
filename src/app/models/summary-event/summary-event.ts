export class SummaryEvent<T> {
    constructor(
        public summaryId: string,
        public source: 'summary' | 'list',
        public target: T
    ) {}
}
