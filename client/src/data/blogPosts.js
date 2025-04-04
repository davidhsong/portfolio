// src/data/blogPosts.js
export const blogPosts = [
  {
    id: 'react-performance-optimization',
    title: 'React Performance Optimization Techniques',
    excerpt: 'Some cool tips I found to make React apps run faster.',
    date: 'April 1, 2025',
    author: 'David Song',
    category: 'React',
    readTime: '8 min read',
    content: `
# React Performance Optimization Techniques

Hey everyone! So I've been working on some React projects for class and also for my internship, and I kept running into the same issue - my apps would get super slow as they got bigger. After a bunch of late nights and energy drinks, I figured out some tricks to make things run way smoother.

## 1. Use React.memo for Component Memoization

\`\`\`jsx
const MyComponent = React.memo(function MyComponent(props) {
  /* render using props */
});
\`\`\`

React.memo basically tells React "hey, don't re-render this unless the props actually change." I used this on a list component in my e-commerce project and it cut down render times by like 40%. Pretty sweet!

## 2. useCallback for Functions

\`\`\`jsx
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
\`\`\`

This one took me a while to get. Basically, when you pass functions as props, React thinks they're new every render. useCallback fixes that by only creating a new function when the dependencies change. Super helpful when you're passing callbacks to child components.

## 3. useMemo for Expensive Calculations

\`\`\`jsx
const memoizedValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);
\`\`\`

I used this in my data visualization project when I had to process a ton of points for a chart. Before useMemo, the app would freeze for a second on every render. After adding it, smooth as butter!

## 4. Virtualize Long Lists

For my project that had to display hundreds of items, virtualizing the list was a game-changer:

\`\`\`jsx
import { FixedSizeList } from 'react-window';

const Row = ({ index, style }) => (
  <div style={style}>Row {index}</div>
);

const Example = () => (
  <FixedSizeList
    height={400}
    width={300}
    itemSize={35}
    itemCount={1000}
  >
    {Row}
  </FixedSizeList>
);
\`\`\`

This only renders the items that are actually visible on screen. My professor was pretty impressed when I showed this in my final project!

## 5. Code Splitting with React.lazy

Split your code so it only loads what you need:

\`\`\`jsx
const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}
\`\`\`

## Conclusion

I used these techniques in my last hackathon project and our app was noticeably faster than the other teams'. Remember though, don't go overboard optimizing everything from the start - that's premature optimization and can make your code harder to work with. I usually build the feature first, then optimize if it feels slow.

Let me know if you try any of these out on your projects!
    `,
    tags: ['React', 'Performance', 'JavaScript', 'Web Development'],
    image: '/images/blog/react-performance.jpg'
  },
  {
    id: 'building-accessible-web-apps',
    title: 'Building Accessible Web Apps',
    excerpt: 'Making websites everyone can use isn\'t that hard - here\'s what I learned.',
    date: 'March 25, 2025',
    author: 'David Song',
    category: 'Accessibility',
    readTime: '10 min read',
    content: `
# Building Accessible Web Apps

So last semester I took this elective on UI/UX, and we had this assignment to make an accessible web app. I honestly thought it was going to be super boring, but it turned out to be really interesting and actually pretty important!

## Why Accessibility Matters

I never really thought about this before, but there are tons of people who use the web differently than I do. Some folks use screen readers, others can't use a mouse, and some have trouble with certain color combinations.

My roommate is colorblind and I watched him struggle with this food delivery app that used red and green buttons with no text labels. That's when it clicked for me - this stuff actually matters!

## Easy Wins for Accessibility

### 1. Use Semantic HTML

This was the biggest "aha" moment for me. Instead of div-soup like this:

\`\`\`html
<!-- Don't do this -->
<div class="button" onclick="submitForm()">Submit</div>
\`\`\`

Just use the right HTML elements:

\`\`\`html
<!-- Do this instead -->
<button type="submit">Submit</button>
\`\`\`

The browser already knows how to make buttons accessible - it handles keyboard focus, screen readers can identify it, etc. Work smarter, not harder!

### 2. Add Alt Text to Images

\`\`\`html
<img src="cat.jpg" alt="A tabby cat playing with a ball of yarn">
\`\`\`

This is super easy to do and helps screen reader users understand what's in the image. When I'm lazy I skip this, but after seeing how screen readers just say "image" when there's no alt text, I try to add it whenever I can.

### 3. Make Sure There's Enough Contrast

I used to go crazy with light gray text on white backgrounds because it looked "clean" but now I run everything through a contrast checker. People should actually be able to read your content!

## Testing Your Site for Accessibility

For our class project, I tried using my site with just the keyboard - no mouse. It was WAY harder than I expected, and I found a ton of issues:

1. Couldn't tab to some buttons
2. Couldn't tell which element had focus
3. Some dropdown menus were impossible to use

I also installed a screen reader (VoiceOver on my Mac) and tried to navigate my site. That was eye-opening - a lot of my site made no sense at all.

## Simple Code Examples

Here's how I fixed a form I was working on:

\`\`\`jsx
// Bad version
<div>
  <div>Email</div>
  <input type="text" />
  {error && <div style={{color: 'red'}}>Invalid email</div>}
</div>

// Good version
<div>
  <label for="email-input">Email</label>
  <input 
    id="email-input" 
    type="email" 
    aria-invalid={error ? "true" : "false"}
    aria-describedby={error ? "email-error" : undefined}
  />
  {error && <div id="email-error" role="alert">Invalid email</div>}
</div>
\`\`\`

## Final Thoughts

I'm definitely not an expert on this stuff, but just making these small changes has made my projects so much more usable for everyone. Plus, a lot of accessibility improvements also make your site better for ALL users, not just those with disabilities.

Oh, and my accessibility project ended up being the one the professor showed to the next class as an example, so that was pretty cool. 🙌
    `,
    tags: ['Accessibility', 'Web Development', 'HTML', 'ARIA', 'UX'],
    image: '/images/blog/accessibility.jpg'
  },
  {
    id: 'nextjs-vs-create-react-app',
    title: 'Next.js vs Create React App: Which One to Use?',
    excerpt: 'Been trying both for my projects - here\'s what I learned.',
    date: 'March 15, 2025',
    author: 'David Song',
    category: 'Web Development',
    readTime: '7 min read',
    content: `
# Next.js vs Create React App: Which One to Use?

When I first started learning React, I used Create React App (CRA) because that's what the tutorial I was following used. It was super easy to get started:

\`\`\`bash
npx create-react-app my-app
cd my-app
npm start
\`\`\`

But then in my web dev class, our professor made us use Next.js for our final project, and I was like "ugh, why do I need to learn ANOTHER framework?" But after working with it for a while, I get why both exist and when you'd want to use each one.

## Create React App: Super Simple to Start

CRA is perfect when:

- You're just learning React and don't want to be overwhelmed with extra concepts
- You're building something that doesn't need SEO (like an internal dashboard)
- You need to quickly prototype something

It's basically zero-config to get started, which is awesome when you're in a hackathon or just want to test something out quickly.

## Next.js: More Features, More Power

I fought against Next.js at first, but now I'm kinda in love with it. It gives you:

- Server-side rendering (SSR) so Google can actually see your content
- Automatic code splitting so your pages load faster
- File-based routing (no more React Router setup!)
- API routes so you can build backend functionality right in your app

Setting up a Next.js project is almost as easy as CRA:

\`\`\`bash
npx create-next-app my-next-app
cd my-next-app
npm run dev
\`\`\`

## Real Talk: My Experience with Both

For my personal portfolio (this site!), I used CRA because:
- I didn't need SEO that badly
- It was simpler to set up
- I was already familiar with it

But for our class e-commerce project, Next.js was actually better because:
- We needed good SEO so people could find our products on Google
- The built-in API routes let us handle payments without setting up a separate backend
- Images loaded way faster with Next.js's image optimization

One thing I noticed was that our Next.js app scored way better on Lighthouse performance tests than similar CRA apps I've built before.

## Which One Should You Choose?

If you're new to React, start with CRA. It's simpler and you can focus on learning React itself without the extra Next.js concepts.

If you're building something serious that needs to be found on Google, go with Next.js. The SEO benefits alone are worth it.

For school projects, honestly either works, but I've found that professors are more impressed with Next.js projects (mine gave me extra credit for using the image optimization features lol).

## My Final Verdict

I use CRA for quick experiments and tools just for me, and Next.js for anything I want other people to actually find and use. Also, having both on my resume has definitely helped me stand out in internship interviews!

What are you all using for your projects? Let me know in the comments or hit me up on Discord!
    `,
    tags: ['Next.js', 'React', 'Web Development', 'JavaScript', 'Frontend'],
    image: '/images/blog/nextjs-vs-cra.jpg'
  },
  {
    id: 'surviving-data-structures',
    title: 'How I Survived Data Structures Class',
    excerpt: 'This class nearly destroyed me, but I made it through. Here\'s how.',
    date: 'March 5, 2025',
    author: 'David Song',
    category: 'Computer Science',
    readTime: '9 min read',
    content: `
# How I Survived Data Structures Class

Alright, so Data Structures (CS 146 at my school) has a reputation for being a "weed-out" class, and now I understand why. I just finished it last semester, and while my social life took a serious hit, I actually ended up with an A-. Here's how I managed to not completely lose my mind.

## The Challenge

For those who haven't taken it yet, Data Structures is where they teach you about:
- Arrays, LinkedLists, Stacks, Queues
- Trees (Binary, AVL, Red-Black)
- Hash Tables
- Graphs
- Tons of algorithms that use these structures

And they expect you to implement ALL of them from scratch. No libraries, no shortcuts, just you and your code editor in a dark room at 3 AM wondering why your AVL tree rotation is creating an infinite loop.

## My Survival Strategy

### 1. Start Assignments EARLY (Like, Seriously)

I cannot stress this enough. The first assignment, I thought "How hard could implementing a linked list be?" and started it two days before the deadline. BIG mistake. Even "simple" data structures have tons of edge cases you won't think about until you're deep in the code.

After barely submitting that first assignment on time (with bugs), I started every other assignment the day it was given. This was a game-changer.

### 2. Visualize Everything

My biggest breakthrough came when I stopped trying to track everything in my head and started drawing it out. For trees especially, I'd grab a piece of paper and draw each step of my algorithm.

For debugging, I made a simple function to print out the structure at each step:

\`\`\`java
// For tree debugging
public void printTree() {
    printTreeHelper(root, 0);
}

private void printTreeHelper(Node node, int level) {
    if (node == null) return;
    
    printTreeHelper(node.right, level + 1);
    
    for (int i = 0; i < level; i++) {
        System.out.print("    ");
    }
    System.out.println(node.value);
    
    printTreeHelper(node.left, level + 1);
}
\`\`\`

This prints the tree sideways, and it saved me so many hours of debugging.

### 3. Form a Study Group

This was crucial. I found three other students who were as lost as I was, and we'd meet twice a week to work through problems. We had a rule: no sharing code, but we could discuss concepts and approaches.

Having people to explain your approach to helps you catch flaws in your logic before you write a single line of code.

### 4. Create Your Own Test Cases

The tests our professor provided were basic at best. I learned quickly that passing those tests didn't mean your implementation was correct. I started creating my own test cases for edge cases like:

- Empty data structures
- One-element data structures
- Removing the first/last element
- Duplicates
- Really large inputs

This approach caught so many bugs before submission.

### 5. Office Hours Are Your Friend

I used to think office hours were just for struggling students, but that was a dumb mindset. Even when I understood the material, going to office hours gave me insights into what the professor was looking for in the assignments.

Plus, our TA was way more helpful one-on-one than in class. He'd point me in the right direction without giving away the solution.

## The Projects That Nearly Broke Me

### The Dreaded Red-Black Tree

This was the project where half the class disappeared. Red-Black trees have these complex rules for balancing, and the rotations will melt your brain:

\`\`\`java
// This is just ONE of the rotation cases
private void fixAfterInsertion(Node x) {
    x.color = RED;

    while (x != null && x != root && x.parent.color == RED) {
        if (x.parent == x.parent.parent.left) {
            Node y = x.parent.parent.right;
            if (y != null && y.color == RED) {
                // Case 1
                x.parent.color = BLACK;
                y.color = BLACK;
                x.parent.parent.color = RED;
                x = x.parent.parent;
            } else {
                if (x == x.parent.right) {
                    // Case 2
                    x = x.parent;
                    leftRotate(x);
                }
                // Case 3
                x.parent.color = BLACK;
                x.parent.parent.color = RED;
                rightRotate(x.parent.parent);
            }
        } else {
            // Same code but with "left" and "right" swapped
            // ...
        }
    }
    root.color = BLACK;
}
\`\`\`

I spent like 15 hours on this function alone. What saved me was drawing each step of the algorithm on paper, with colors and everything.

### Dijkstra's Algorithm

This one wasn't conceptually that difficult, but the implementation details were tricky. Using a priority queue is essential, and the way you update distances matters a lot:

\`\`\`java
public void dijkstra(int start) {
    // Init distances array
    int[] dist = new int[vertices];
    Arrays.fill(dist, Integer.MAX_VALUE);
    dist[start] = 0;
    
    // PriorityQueue to get the nearest vertex
    PriorityQueue<Node> pq = new PriorityQueue<>(
        Comparator.comparingInt(node -> node.distance)
    );
    pq.add(new Node(start, 0));
    
    while (!pq.isEmpty()) {
        Node current = pq.poll();
        int u = current.vertex;
        
        // If this is an outdated entry, skip
        if (current.distance > dist[u]) continue;
        
        // Check all neighbors
        for (Edge edge : adjList[u]) {
            int v = edge.dest;
            int weight = edge.weight;
            
            // If new path is shorter
            if (dist[u] + weight < dist[v]) {
                dist[v] = dist[u] + weight;
                pq.add(new Node(v, dist[v]));
            }
        }
    }
}
\`\`\`

## Final Thoughts

Data Structures was easily the hardest class I've taken so far, but also the most valuable. I use this knowledge every day in my other CS classes and in my internship projects.

If you're about to take this class, don't panic! Just start early, visualize your algorithms, and find some study buddies. You've got this!

Anyone else have Data Structures war stories? Drop them in the comments!
    `,
    tags: ['Computer Science', 'Data Structures', 'Algorithms', 'Java', 'Programming'],
    image: '/images/blog/data-structures.jpg'
  },
  {
    id: 'first-hackathon-experience',
    title: 'My First Hackathon Experience',
    excerpt: '36 hours, no sleep, and more energy drinks than I care to admit.',
    date: 'February 20, 2025',
    author: 'David Song',
    category: 'Personal',
    readTime: '6 min read',
    content: `
# My First Hackathon Experience

Last weekend I participated in my first ever hackathon - HackSJSU 2025. It was 36 hours of coding, very little sleep, and enough caffeine to power a small city. Here's how it went down!

## The Idea

Our team (me and three classmates) decided to build something called "StudySync" - basically a tool that helps study groups coordinate and hold each other accountable. The idea came from our own struggles trying to coordinate group projects.

Features we wanted to include:
- Shared calendar for study sessions
- Task assignments
- Progress tracking
- AI-generated study questions based on uploaded notes

We were ambitious... maybe too ambitious for 36 hours.

## The Tech Stack

We decided to go with:
- Next.js for the frontend
- Firebase for authentication and database
- OpenAI API for the AI study questions
- Tailwind CSS for styling

I was most comfortable with the frontend, so I took on the Next.js and Tailwind parts.

## The Timeline

### Friday Evening: Excitement!

We arrived at 6pm, full of energy and optimism. After the opening ceremony, we secured a table, set up our dev environments, and spent a good 2 hours just planning everything out. We used Figma to design the UI and Trello to track tasks.

By midnight, we had a basic app structure, authentication working, and some UI components built.

### Saturday Morning: Reality Sets In

After about 3 hours of sleep on the venue floor (not recommended), I woke up to find that our Firebase integration was having issues. The data wasn't structured well, and we were getting weird bugs.

This is where things got stressful. We spent about 4 hours just fixing our data model and rewriting parts of the app. I learned a valuable lesson: spend more time planning your data structure upfront!

Here's what our component structure looked like:

\`\`\`jsx
// Main app layout
function Dashboard() {
  const { user } = useAuth();
  const [groups, setGroups] = useState([]);
  
  useEffect(() => {
    if (user) {
      // Fetch user's study groups
      const userGroupsRef = db
        .collection('users')
        .doc(user.uid)
        .collection('groups');
      
      return userGroupsRef.onSnapshot(snapshot => {
        const groupData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setGroups(groupData);
      });
    }
  }, [user]);
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">My Study Groups</h1>
      
      {groups.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {groups.map(group => (
            <GroupCard key={group.id} group={group} />
          ))}
        </div>
      )}
    </div>
  );
}
\`\`\`

### Saturday Night: The Breakthrough

Around 8pm on Saturday, we finally got everything working smoothly. The backend was stable, and we could focus on actually building the features we wanted.

I pulled an all-nighter working on the UI. By 6am Sunday, we had a fully functional app with most of our planned features (we had to drop the AI study questions due to time constraints).

### Sunday: Demo Time

The demos started at 2pm, and we were scrambling to fix last-minute bugs until about 1:45pm. We managed to put together a decent presentation though, and our demo went surprisingly well!

We didn't win any of the main prizes, but we did get an honorable mention for "Best Education Hack," which was pretty cool for a first hackathon.

## Lessons Learned

1. **Sleep is important.** I thought I could power through on energy drinks, but my code quality definitely suffered after 24+ hours awake.

2. **Scope your project realistically.** We should have built a simpler version first, then added features if we had time.

3. **Plan your data structure early.** This was our biggest time sink.

4. **Bring a toothbrush.** Seriously.

5. **Have fun!** Despite the stress and sleep deprivation, it was an amazing experience and I can't wait to do it again.

## Would I Do It Again?

Absolutely! In fact, I've already signed up for another hackathon next month. This time though, I'm bringing a sleeping bag, better planning our data structures, and setting more realistic goals.

If you've never done a hackathon, I highly recommend trying one. It's a great way to push your coding skills, meet cool people, and maybe even build something useful!

PS: Our project is now on GitHub if anyone wants to check it out or contribute. I'll be adding those AI study questions eventually!
    `,
    tags: ['Hackathon', 'Web Development', 'Next.js', 'Firebase', 'Personal'],
    image: '/images/blog/hackathon.jpg'
  },
  {
    id: 'learning-typescript',
    title: 'TypeScript: My Journey from Skeptic to Advocate',
    excerpt: 'I used to hate TypeScript. Now I can\'t imagine coding without it.',
    date: 'February 10, 2025',
    author: 'David Song',
    category: 'Programming',
    readTime: '8 min read',
    content: `
# TypeScript: My Journey from Skeptic to Advocate

When I first heard about TypeScript, I thought it was just Microsoft trying to make JavaScript more complicated. "Why would I want to add types to JavaScript? That defeats the whole purpose of the language!"

Oh, how wrong I was.

## The Resistance Phase

Last year, my web development professor required us to use TypeScript for our final project. I was NOT happy about it. I had just gotten comfortable with React and JavaScript, and now I had to learn this whole new syntax?

My first week with TypeScript was filled with errors like:

\`\`\`
Type '{ text: string; }' is not assignable to type 'never'.
\`\`\`

And my personal favorite:

\`\`\`
Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
  Type 'undefined' is not assignable to type 'string'.
\`\`\`

I spent more time fighting the compiler than actually building features. I kept thinking, "This is slowing me down so much! JavaScript would never complain about this!"

## The Turning Point

About three weeks into the project, something interesting happened. A teammate pushed some code that broke my component. In JavaScript, this would have led to a runtime error that I'd have to debug. But in TypeScript, I got an immediate compiler error pointing to exactly where the problem was.

That was my first "aha" moment.

Then I had to refactor a large part of our app to use a new API. In JavaScript, I would have had to manually check every place where that data was used. With TypeScript, I changed the types, and the compiler showed me every single place that needed updating.

That was when I started to see the value.

## My Favorite TypeScript Features

### Type Inference

TypeScript is actually pretty smart about figuring out types on its own:

\`\`\`typescript
// You don't need to do this:
const name: string = "David";

// TypeScript already knows it's a string:
const name = "David";
\`\`\`

### Interface Declarations

Defining the shape of your data is super helpful, especially in larger projects:

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
  isAdmin?: boolean; // Optional property
}

function getUserEmail(user: User): string {
  return user.email;
}
\`\`\`

### Union Types

This is one of my favorite features:

\`\`\`typescript
type Status = "pending" | "approved" | "rejected";

function processApplication(status: Status) {
  // TypeScript will make sure you handle all three cases
  switch (status) {
    case "pending":
      return "Under review";
    case "approved":
      return "Congratulations!";
    case "rejected":
      return "Sorry, try again later";
  }
}
\`\`\`

If you later add a new status option, TypeScript will warn you that your function doesn't handle it yet!

## Real-World Benefits I've Seen

1. **Fewer Bugs**: This is the obvious one. TypeScript catches so many issues before runtime.

2. **Better Refactoring**: Changing code is much less scary when the compiler has your back.

3. **Better Documentation**: The types themselves serve as documentation. I can look at a function signature and immediately know what data it expects.

4. **Better IDE Support**: Auto-completion is WAY better with TypeScript. VS Code suggests properties and methods that actually exist on my objects.

5. **More Confidence**: I'm more confident pushing code because TypeScript has already checked a lot of potential issues.

## Tips for JavaScript Developers Trying TypeScript

If you're thinking about trying TypeScript, here's my advice:

1. **Start with tsconfig.json on "loose" settings**: You can make TypeScript more forgiving at first and tighten it up as you get comfortable.

2. **Use Type Assertions Sparingly**: When you're first converting code, you might be tempted to use "as any" everywhere. Try to limit this, as it defeats the purpose.

3. **Learn Incrementally**: You don't need to know every advanced TypeScript feature right away. Start with basic typing and interfaces.

4. **Use Community Types**: For popular libraries, there's usually a "@types" package available. Use these instead of writing your own type definitions.

5. **Ask for Help**: The TypeScript community is pretty friendly. Stack Overflow and the TypeScript Discord are good resources.

## Conclusion

I went from being a big TypeScript skeptic to someone who now chooses it for all new projects, even personal ones. Yes, there's a learning curve, and yes, sometimes you feel like you're fighting the compiler. But the productivity and confidence boost I get from using TypeScript now far outweighs those initial struggles.

If you're on the fence, give it a fair shot for a couple of weeks. You might be surprised how quickly you get used to it!

What about you? Are you a TypeScript fan or still happy with JavaScript? Let me know in the comments!
    `,
    tags: ['TypeScript', 'JavaScript', 'Programming', 'Web Development'],
    image: '/images/blog/typescript.jpg'
  }
];