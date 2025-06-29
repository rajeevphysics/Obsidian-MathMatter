---

---

>[!summary]
>- Formed when two conductors are separated by an insulator 
>- It's "charged " when the two conductors have opposite charges
>- To find capacitance the general formula is to use Gauss's law to find the electric field and $Q_enc$. 
>- To find potential difference we use general formula from electrical potential energy 
>
>**Key equations:**
>
Capacitance:
> $C = \frac{Q}{V}$
> 
>Capacitors in series:
  $\frac{1}{C}=\frac{1}{C_1}+\frac{1}{C_2}$
  >
>Capacitor in parallel:  
>$C_T = C_1 + C_2$

>[!info]+ Read Time
**⏱ 5 mins**

# What Does It Mean for a Capacitor to Be Charged
>[!warning] Assumption
We will assume a capacitor is in a full circuit (battery linked to capacitor) and [[Current|current]]
>
**Before** the circuit is complete both plates have **equal** charges. 

When the circuit is closed and current is running **positive charges** move away from the bottom part of the capacitor, **negative** move away from the top capacitor **forming this difference** you see in the image below.
![[cap_1.png]]

>[!note]
The difference between a capacitor when a circuit is complete will create an electric field.
>
>This is because there is now a difference between charges once a circuit is complete and current is moving.
>
![[cap_2.png| 400]] 

# Deriving Capacitance 
>[!warning] Assumptions
To find the capacitance in the most general sense, well assume that the plates are even and symmetric so we can use arguments from [[Gauss's Law|Gauss's law]]. (Like in the figure above)



$$\begin{array}{c}
\text{Use Gauss's Law aurugments for two plates} \\ 
\oint E\cdot dA = \frac{Q_{enc}}{\epsilon_0} \\ 
\text{Well assume our gaussian surface as some closed square with area A.
} \\ \text{Well use this same argument for finding the Q} \\ \\
Q_{enc} = \lambda A \\\\

\text{Where our charge density $\lambda$ is defined through the area. Solving for area we get.} \\\\

\oint E \cdot dA = \ 
E = \frac{\lambda}{\epsilon_0} \\ 

\end{array}$$

>[!bug] Note 
We will want our Q in terms of the electric field so we will solve for Q_enc as a general solution in terms of the electric field.

$$\begin{array}{c}
EA = \frac{Q_{enc}}{\epsilon_0} \\ 
Q_{enc} = EA\epsilon_0 \\ \\
\text{So then our potential difference from Electric Potential is} \\\\
\Delta V = -\int E\cdot dS \\ 
\end{array}$$

>[!bug] Note
Well assume the integral of distance is D and the electric field is uniform. 
We're going to assume our starting point is from the positive plate to negative plate, but our displacement starts from the negative plate to positive.

So we can our electric difference V as
$$V = Ed$$
Then we can come to our definition:
$$C=\frac{Q}{V}=\frac{EA\epsilon_0}{Ed}=\frac{\epsilon_0A}{d}$$
## Deriving Energy Stored in Capacitors
>[!warning] Assumption 
From our result in the last derivation, the [[Electric Potential]] is the amount of work done on the capacitor to charge it
Note: $V = \frac{Q}{C}$

$$\begin{array}a
W =\int_a ^ b V\left(q\right)dQ \\ 
= \int_a ^ b \frac{Q}{C} dQ \\ 
W = \frac{Q^2}{2C} \\ 
\text{So in general} \\ 
U = \frac{Q^2}{2C} = \frac{1}{2}QV 

\end{array}$$

Energy stored in a capacitor is just the solution of work. Another way of saying it is $dW = Vdq$. This is the electric field between the plates.

Electric energy density (in a vacuum) = $u  = \frac{1}{2} \epsilon _0 E^2$ 

## Deriving Capacitors in Series
![[cap_3.png]] [^2]
>[!note] Explanation
Capacitor in series have two capacitor sharing the same wire as this.
>
Adding the voltage gives the change in the voltage from both ends.

>[!warning] Assumption 
We will assume the charge (Q) is the same in between the two capacitors, so there is no other things in the circuits and the voltage is the same enter/leaving the system 

$$\begin{array}{c} 
V = V_1 + V_2  + V_3 \\ 
\text{Voltage adds up since the total voltage from the battery goes into the battery} \\  \text{Charge in the system is the same}
\\ \\
V = \frac{Q}{C} \\ \text{If we assume the voltage adds up} \\  \text {and our charge Q are the same} \\ \text{then we sub in voltage and simplify}\\
\\ 
\frac{1}{C}=\frac{1}{C_1}+\frac{1}{C_2}
\end{array}$$

>[!bug] **Justify Q is the same**
>Because the system is closed, the current applied to the circuits  is that of the capacitors. For the above equation to be true the charge that flows from one capacitor to another must be the same.
## Deriving Capacitors in Parallel 
![[cap_4.png]] [^3]
>[!note] Explanation
Example of capacitors in parallel. The voltage in both capacitors are the same.

>[!warning] Assumptions 
>Let Voltage is now the same (Voltage decreases but spilt the same)
If **voltage** is the **same** then the charge is different we can say some argument for this.

$$\begin{array}{c}
V_T = V_1 = V_2 \\ \\
\text{Because there is nothing else in this circuit the total charge going in must = total out} \\ \\
Q_T = Q_1 +Q_2 \\ 
Q = CV \\ \\
C_TV = C_1V + C_2V \\ 
C_T = C_1 + C_2
\end{array}$$

# Resources 
<iframe width="560" height="315" src="https://www.youtube.com/embed/Ag2RujOHqJ8?si=Qn-WvPODyzKsKBvQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


---

> 📚 Like this note? [Star the GitHub repo](https://github.com/rajeevphysics/Obsidian-MathMatter) to support the project and help others discover it!

---

[^1]: Diagram taken from https://tikz.net/capacitors/ by Izaak Neutelings (February 2020)

[^2]: Diagram adapted from https://tikz.net/electric_circuit_capacitors/ by Izaak Neutelings (February, 2020) 

[^3]: Adapted from https://tikz.net/electric_circuit_capacitors/ by by Izaak Neutelings (February, 2020) 
