/**
 * Build a dependency tree from connections array
 * Returns a map of parent ID to array of child IDs
 */
function buildDependencyTree(connections) {
  const tree = new Map();
  
  // Initialize empty arrays for all nodes
  connections.forEach(conn => {
    if (!tree.has(conn.to)) tree.set(conn.to, []);
    if (!tree.has(conn.from)) tree.set(conn.from, []);
  });
  
  // Build parent -> children mapping
  connections.forEach(conn => {
    const children = tree.get(conn.to) || [];
    children.push(conn.from);
    tree.set(conn.to, children);
  });
  
  return tree;
}

/**
 * Get all child lesson IDs for a given parent (topic/root) node
 * Recursively finds all descendants that are lessons
 */
function getChildLessons(nodeId, tree, courseData) {
  const children = tree.get(nodeId) || [];
  const lessons = [];
  
  for (const childId of children) {
    const childNode = courseData.find(n => n.id === childId);
    if (!childNode) continue;
    
    if (childNode.type === 'lesson') {
      lessons.push(childId);
    } else {
      // Recursively get children of topics
      lessons.push(...getChildLessons(childId, tree, courseData));
    }
  }
  
  return lessons;
}

/**
 * Get direct child topics for root node
 */
function getChildTopics(rootId, tree, courseData) {
  const children = tree.get(rootId) || [];
  return children.filter(childId => {
    const node = courseData.find(n => n.id === childId);
    return node && node.type === 'topic';
  });
}

module.exports = {
  buildDependencyTree,
  getChildLessons,
  getChildTopics
};
