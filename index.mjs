export class MicroStateMachine {
  constructor(schema) {
    this.schema = schema;
    this.status = schema.initial;
  }
  send(event) {
    this.status = this.schema[this.status][event] ?? this.status;
  }
}; 

