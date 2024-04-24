export default function guardrail(mathFunction) {
  const queue = [];
  let mFunc;

  try {
    mFunc = mathFunction();
  } catch (error) {
    mFunc = error.toString();
  }
  queue.push(mFunc);
  queue.push('Guardrail was processed');
  return queue;
}
