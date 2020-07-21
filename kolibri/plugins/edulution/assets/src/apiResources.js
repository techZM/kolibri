import { Resource } from 'kolibri.lib.apiResource';

export const KnowledgeMapResource = new Resource({
  name: 'knowledgemap',
  namespace: 'learnplugin',

  fetchKnowledgeMap(id) {
    return this.fetchModel({ id, force: true });
  },
});

/**
 * Gets all of the Classrooms in which a Learner is enrolled
 *
 * @example To get Classrooms without assignments and progress:
 * LearnerClassroomResource.fetchCollection({
 *   getParams: { no_assignments: true },
 * })
 */
export const LearnerClassroomResource = new Resource({
  name: 'learnerclassroom',
  namespace: 'learnplugin',
});

/**
 * Gets Lesson(s) that are assigned to the Learner
 */
export const LearnerLessonResource = new Resource({
  name: 'learnerlesson',
  namespace: 'learnplugin',
});
