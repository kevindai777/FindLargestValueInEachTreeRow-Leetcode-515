//Java Solution

class Solution {
    
    List<Integer> result = new ArrayList<>();
    public List<Integer> largestValues(TreeNode root) {
        dfs(root, 0);
        return result;
    }
    
    public void dfs(TreeNode node, int depth) {
        if (node == null) {
            return;
        }
        
        if (result.size() <= depth) {
            result.add(node.val);
        } else {
            result.set(depth, Math.max(result.get(depth), node.val));
        }
        
        dfs(node.left, depth + 1);
        dfs(node.right, depth + 1);
    }
}