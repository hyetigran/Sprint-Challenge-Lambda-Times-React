1. What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.
    PropTypes are used to ensure that components are receiving the data the developer intended to send.
    It's a preventative/proactive measure when sending props to children.
    
2. Describe a life-cycle event in React?
    React has 3 stages of the life-cycle, mounting, updating, unmounting.
    For example. In the Friends app example, when we add a friend, the Friends component mounts. Then as we edit, it updates and finally when we delete the friend, that component unmounts.

3. Explain the details of a Higher Order Component?
    HOC is a function that takes in a component and returns another component. Usually, the HOC does something to a component i.e. 'enrichment' before rendering it to the screen. We used HOC for authorization and login pages but they can also be used practically for layout.

4. What are three different ways to style components in React? Explain some of the benefits of each.
The three ways to style components are as follows:
    1. Using external file such as css or less
    2. Using inline styles in the JSX
    3. Using styled components library
Styled components are the best way to style components because it allows for specificity without css leaking to other parts of the code. The disadvantage is that it bloats your component file. However, the workaround is to keep your components as small as necessary. Also, with styled components you could pass props which because useful with reusable UI like buttons.