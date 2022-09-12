
export type QuestionObject = {
  category: string,
  id: string,
  correctAnswer: string,
  incorrectAnswers: Array<string>,
  question: string,
  tags: Array<string>,
  type: string,
  difficulty: string,
  regions: Array<string>
}

interface QuestionsCache {
  [key: string]: Array<QuestionObject>,
}

interface QuestionsProps {
  difficulty: string,
}

export class QuestionServices {
  cache: QuestionsCache = {}
  loading: boolean = false
  size: number = 5

  public async loadQuestions(difficulty: string) {
    const response = await fetch(`https://the-trivia-api.com/api/questions?difficulty=${difficulty}&limit=${this.size}`)

    return await response.json()
  }

  public async getNextQuestion(difficulty: string): Promise<QuestionObject> {
    if (!this.cache.hasOwnProperty(difficulty) || this.cache[difficulty].length === 0) {
      this.loading = true
      return this.loadQuestions(difficulty)
        .then(res => {
          let q = res[0]

          this.cache[difficulty] = res.slice(1)
          this.loading = false

          return q
        })
    }

    let q = this.cache[difficulty][0]

    this.cache[difficulty] = this.cache[difficulty].slice(1)

    return q
  }
}
