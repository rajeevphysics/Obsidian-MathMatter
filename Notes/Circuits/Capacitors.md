
>[!summary]
>- Formed when two conductors are separated by an insulator 
>- It's "charged " when the two conductors have opposite [[Charges]]
>- To find capacitance the general formula is to use gausses law to find the electric field and Q_enc. Than find the potential difference from [[Electric Potential Energy]] or [[Electric Potential]]
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

# What does it mean for a capacitor to be Charged
![[cap_1.png| 300]]
>[!note] Explanation
An example of complete circuit with a capacitor 

>[!warning] Assumption
For a capacitor to start to charge or be charged a full circuit needs to be complete

**Before** the circuit is complete both plates have **equal** **charges**. 

But when the circuit is started **positive charges** move away from the bottom part of the capacitor, **negative** move away from the top capacitor **forming this difference**.

Positive charge flows away from the bottom part of the capacitor because its attracted to the negative part of the battery, same goes for the blue block

The capacitor itself creates an electric field:
![[cap_2.png| 500]] 
[^1]
>[!note] Explanation
Example of a capacitor creating an electric field. 


# Deriving Capacitance 
>[!warning] Assumption 
To find the capacitance in the most general sense, well assume that the plates are even and symmetry  so we can use [[Gauss's Law]] arguments.

$$\begin{array}{c}
\text{Use Gauss's Law aurugments for two plates} \\ 
\int E\cdot dA = \frac{Q_{enc}}{\epsilon_0} \\ 
\text{Well assume our gaussian surface as some closed square with area A.
} \\ \text{Well use this same argument for finding the Q} \\ \\
Q_{enc} = \lambda A \\\\

\text{Where our charge density $\lambda$ is defined through the area. Solving for area we get.} \\\\

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

# Extra Resources 
- For extra explanations in understanding **how** a capacitor is charged I recommend this [video](https://www.youtube.com/watch?v=Ag2RujOHqJ8&ab_channel=AllAmericanFiveRadio).



[^1]: Diagram taken from https://tikz.net/capacitors/ by Izaak Neutelings (February 2020)

[^2]: Diagram adapted from https://tikz.net/electric_circuit_capacitors/ by Izaak Neutelings (February, 2020) 

[^3]: Adapted from https://tikz.net/electric_circuit_capacitors/ by by Izaak Neutelings (February, 2020) 
