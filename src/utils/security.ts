import * as bcrypt from 'bcrypt';

const saltOrRounds = 10;

export async function hash(password: string): Promise<string> {
  return await bcrypt.hash(password, saltOrRounds);
}

export async function isMatch(
  password: string,
  hash: string,
): Promise<boolean> {
  return await bcrypt.compare(password, hash);
}
