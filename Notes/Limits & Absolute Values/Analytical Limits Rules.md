
> [!summary]
Analytic limit rules are shortcuts for evaluating limits mathematically
> 
| Rule             | Statement                                                                                                                            | Conditions                                 |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------ |
| Sum / Difference | $\displaystyle \lim_{ x \to a } [f(x) \pm g(x)]=\displaystyle \lim_{ x \to a } f(x)\pm \displaystyle \lim_{ x \to a }  g(x)$         | Both limits exist                          |
| Product          | $\displaystyle \lim_{ x \to a } [f (x)\cdot g (x)]=\lim_{ x \to a }  f(x) \cdot \displaystyle \lim_{ x \to a }  g(x)$                | Both limits exist                          |
| Quotient         | $\displaystyle \lim_{ n \to a } \frac{f(x)}{g(x)}=\frac{\displaystyle \lim_{ n \to a } f (x)}{\displaystyle \lim_{ n \to a } g (x)}$ | The limits  for $g(x)$ does not equal zero |
| Power            | $\lim_{x \to a}\bigl[f (x)\bigr]^n = \Bigl (\lim_{x \to a}f (x)\Bigr)^n$                                                             | $n$ is an integer , and the limit exists   |
| Root             | $\lim_{x \to a}\sqrt[n]{f (x)}= \sqrt[n]{\lim_{x \to a}f (x)},$                                                                      | The root is well defined                   |

>[!info]+ Read Time
**⏱ 3 mins**

# Sum Rule
The sum rule is a shortcut for limits in the form $\displaystyle \lim_{ x \to a }[f(x)+g(x)]$. This rule only works for both limits existing and is as followed

$$
\displaystyle \lim_{ x \to a } [f(x)+g(x)]=\displaystyle \lim_{ x \to a } f(x)+ \displaystyle \lim_{ x \to a }  g(x)
$$
# Difference Rule
The difference rules is a shortcut for limits in the form $\displaystyle \lim_{ x \to a }[f(x)-g(x)]$. The result is as followed and only works when both limits exist

$$
\displaystyle \lim_{ x \to a } [f(x)-g(x)]=\displaystyle \lim_{ x \to a } f(x)-\displaystyle \lim_{ x \to a }  g(x)
$$

# Product Rule
The difference rule is a shortcut for limits in the form $\displaystyle \lim_{ x \to a }[f(x)\cdot g(x)]$. This rule is only valid for when both limits exist and is as followed

$$
\displaystyle \lim_{ x \to a } [f(x)\cdot g(x)]=\displaystyle \lim_{ x \to a }  f(x) \cdot \displaystyle \lim_{ x \to a }  g(x)
$$

# Quotient Rule
The quotient rule is a shortcut for limits in the form $\displaystyle \lim_{ n \to a } \frac{f(x)}{g(x)}$. The shortcut is as followed and is only valid for when $\displaystyle \lim_{ n \to a }g(x)\neq 0$.

$$
\displaystyle \lim_{ n \to a } \frac{f(x)}{g(x)}= \frac{\displaystyle \lim_{ n \to a } f(x)}{\displaystyle \lim_{ n \to a } g(x)} 
$$

## Power Rule
The power law is a shortcut for limits in the form $\displaystyle\lim_{x \to a}\bigl[f(x)\bigr]^n$ and where $n$ is some [[Integers|integer]]. The result is as followed and is only valid for when the limit exist.

$$
\lim_{x \to a}\bigl[f(x)\bigr]^n
= \Bigl(\lim_{x \to a}f(x)\Bigr)^n,
\qquad n\in\mathbb{Z}.
$$

# Root Rule
The root law is a shortcut for limits in the form $\lim_{x \to a}\sqrt[n]{f(x)}$ and where the actual limit is well defined.

$$
\lim_{x \to a}\sqrt[n]{f(x)}
= \sqrt[n]{\lim_{x \to a}f(x)},
\qquad\text{(provided the root is well-defined).}
$$
