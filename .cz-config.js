module.exports = {
  types: [
    { value: "draft", name: "draft: 初稿作成または草稿の変更" },
    { value: "update", name: "update: 内容の更新や修正" },
    {
      value: "format",
      name: "format: フォーマット調整",
    },
    { value: "chore", name: "chore: その他の雑多な作業" },
  ],
  messages: {
    type: "コミットの種類を選んでください:",
    subject: "変更内容を簡潔に記述してください:",
    confirmCommit: "この内容でコミットしますか？",
  },
  allowCustomScopes: false,
  allowBreakingChanges: false,
  subjectLimit: 72,
  skipQuestions: ["body", "footer"],
};
