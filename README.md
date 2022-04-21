## The Golden Rule:

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1. **Make a drawing of your app. Simple "wireframes"**


Main
1. **Once you have a drawing, name the HTML elements you'll need to realize your vision** See Drawing
- Three Buttons w/hidden phrases
1: Who am I? (hidden)
2: What do I enjoy doing? (hidden)
3: Favorite Animaml (toggle)
1. **For each HTML element ask: Why do I need this?** 
1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"** Make const for each button and parapgraph. Even listeners should include class removal, or toggle.

Use two class removers, one class toggle. 
1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?** Clickety click click
1. **Think about how to validate each of your features according to a Definition of Done** Do the buttons work? Yesh
1. **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Next Steps: Decorate, and publish onto Netlify. 

Additional considerations:

-   Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
-   Consider your data model.
    -   What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?
    -   What are the key/value pairs?
    -   What arrays might you need?
    -   What needs to live in a persistence layer?
-   Is there some state we need to initialize?
-   Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be reused?)
