function fibonacci(n) {
  if (n <= 0) return [0];
  if (n === 1) return [0, 1];

  const sequence = [0, 1];
  for (let i = 2; i <= n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
