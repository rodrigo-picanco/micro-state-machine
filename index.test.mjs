import test from 'node:test'
import assert from 'node:assert/strict';
import { MicroStateMachine } from './index.mjs';

test('MicroStateMachine', (t) => {
  const machine = new MicroStateMachine({
    initial: 'green',
    green: {
      change: 'red',
    },
    red: {
      change: 'yellow',
    },
    yellow: {
      change: 'green',
    }
  });
  assert.strictEqual(machine.status, 'green');
  machine.send('change');
  assert.strictEqual(machine.status, 'red');
  machine.send('change');
  assert.strictEqual(machine.status, 'yellow');
  machine.send('change');
  assert.strictEqual(machine.status, 'green');
  machine.send('stop');
  assert.strictEqual(machine.status, 'green');
});
