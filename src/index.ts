import { execSync } from 'node:child_process'
import process from 'node:process'

export function getWorkLogs() {
  try {
    // const rootDir = execSync('git rev-parse --show-toplevel').toString().trim()
    const branch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim()
    const author = execSync('git config --get user.name').toString().trim()
    const commit = execSync(`git log --format="%s" ${author && `--author=${author}`} --since=1.week`)
      .toString()
      .trim()
    const cmsg = new Set(commit.split('\n'))
    console.log('\x1B[32m%s\x1B[0m', '✨ [amis] revision.json generated successfully!', {
      // rootDir,
      // branch,
      commit: Array.from(cmsg),
    })
    process.exit()
  }
  catch (err) {
    console.log(err.message)
    process.exit(1)
  }
}
