export function getLessons (state) {
  return state.lessons.map((lesson, index) => {
    return {
      index,
      title: lesson.title,
      done: getCompleted(state).indexOf(index) > -1,
      active: state.currentLesson === index
    }
  })
}

export function getCompletedSectionCount (state) {
  let c = 0
  if (getSolved(state)) {
    c = 1
  }
  return state.currentSection + c
}

export function getSectionCount (state) {
  return state.lessons[state.currentLesson].sections.length
}

export function getCompletedCount (state) {
  return state.completedLessons.length
}

export function getCompleted (state) {
  return state.completedLessons
}

export function getLessonCount (state) {
  return state.lessons.length
}

export function getLesson (state) {
  const lesson = state.lessons[state.currentLesson]
  lesson.index = state.currentLesson
  return lesson
}

export function getSection (state) {
  return state.lessons[state.currentLesson].sections[state.currentSection]
}

export function getOutput (state) {
  return state.output
}

export function getHistory (state) {
  return state.history
}

export function getSolved (state) {
  try {
    return getSection(state).checkSolved(state) || state.solvedCurrentSection
  } catch (e) {
    return state.solvedCurrentSection
  }
}

export function getLessonSolved (state) {
  // returns true if the last section of the current lesson is solved
  return getSolved(state) && getSectionCount(state) === state.currentSection + 1
}

export function getTurbo (state) {
  return state.turbo
}

export function getLessonSelectionActive (state) {
  return state.lessonSelectionActive
}

export function getDoneModalActive (state) {
  return getSolved(state) && !getLessonSolved(state)
}
