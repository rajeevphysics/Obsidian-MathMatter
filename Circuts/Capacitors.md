
>[!summary]
>- Formed when two conductors are separated by an insulator 
>- It's "charged "when the two conductors have opposite [[Charges]]
>- To find capacitance the general formula is to use gausses law to find the electric field and Q_enc. Than find the potential differnce from [[Electric Potential]]
>
>- **Key equations:**
>- 
>-  $C = \frac{Q}{V}$
>- For capacitor in series the voltage needs to add up so we get:
.- $\frac{1}{C}=\frac{1}{C_1}+\frac{1}{C_2}$
>- Capacitor in parellel:
>- the voltage is the same so we get the arguments:
>- $C_T = C_1 + C_2$

# What does it mean for a capacitor to be Charged

![[Pasted image 20250531183242.png]]
>[!note] Explanation
An example of complete circuit with a capacitor 

When a circuit is complete a difference of voltage is done. 

**Before** the circuit is complete both plates have **equal** **charges,** but when the circuit is started **postive charges** move away from the yellow block, **negative** move away from blue block **forming this differnce**.

Postive charge flows away from the yellow block because its attracted to the - part of the battery same goes for the blue block

The capactior itself creates a electric field:
![[Pasted image 20250531183508.png]]
>[!note] Explanation
Example of a capacitor creating an electric field.

# Finding Capacitance 
To find the capacitance in the most general sense, well assume that the plates are even and symm so we can use [[Gauss's Law]] arguments.

Use [[Gauss's Law]] aurmgnet for two plates
$$\int E\cdot dA = \frac{Q_{enc}}{\epsilon_0}$$
Well assume our gaussian surface as some closed sqaure with area A.
Well use this same aurmgent for finding the Q
$$Q_{enc} = \lambda A$$
Where our charge density $\lambda$ is defined through the area. Solving for area we get.
$$E = \frac{\lambda}{\epsilon_0}$$
**Note** we will want our Q in terms of the electric field so we will solve for Q_enc as a general solution in terms of the electric field.

$$\begin{array}{c}
EA = \frac{Q_{enc}}{\epsilon_0} \\ 
Q_{enc} = EA\epsilon_0
\end{array}$$

So then our potentionl differnce from [[Electric Potential]] is:
$$\Delta V = -\int E\cdot dS$$
Well assume the intergral of distance is D and the electric field is uniform. 
Were going to assume our starting point is from the postive plate to negative plate, but our displacment starts from the negative plate to postive.

So we can our electric differnce V as
$$V = Ed$$
Then we can come to our definition:
$$C=\frac{Q}{V}=\frac{EA\epsilon_0}{Ed}=\frac{\epsilon_0A}{d}$$
Units are C / V or F

# Energy Stored in Capacitors
From out result in the last derivation, the [[Electric Potential energy]] is the amount of work done on the capactior to charge it
Note: $V = \frac{Q}{C}$

$$\begin{array}a
W =\int_a ^ b V\left(q\right)dQ \\ 
= \int_a ^ b \frac{Q}{C} dQ \\ 
W = \frac{Q^2}{2C} \\ 
\text{So in general} \\ 
U = \frac{Q^2}{2C} = \frac{1}{2}QV 

\end{array}$$

Energy stored in a capacitor is just the solution of work. Another way of saying it is $dW = Vdq$. This is the electric field between the plates.

Electric energy density (in a vaccum) = $u  = \frac{1}{2} \epsilon _0 E^2$ 

# Capacitors in Series
![[Pasted image 20250531183924.png]]
>[!note] Explanation
Capacitor in series have two capacitor sharing the same wire as this.
>
Adding the voltage gives the change in the voltage from both ends.

If we assume the charge (Q) is the same in between the twocapacitorss, then if there is no other things in the circuits, then the voltage must be the same leaving system than what was entered.
$$V = V_1 + V_2$$
**Voltage adds up** since the total voltage from the battery goes into the battery. **Charge in the system is the same**

If we assume the voltage adds up, and our charge Q are the same, then we sub in voltage and simplify.

$$\frac{1}{C}=\frac{1}{C_1}+\frac{1}{C_2}$$
>[!bug] **Justify Q is the same**
>Because the system is closed, the current applied to the circuits  is that of the capacitors. For the above equation to be true the charge that flows from one capacitor to another must be the same.
# Capacitors in Parallel 
![[Pasted image 20250531184130.png]]
>[!note] Explanation
Example of capacitors in parallel. The voltage in both capacitors are the same.


Voltage is now the same (Voltage decreases but spilt the same)
If **voltage** is the **same** then the charge is different we can say some argument for this.

So our total voltage:
$$V_T = V_1 = V_2$$
Because there is nothing else in this circuit the total charge going in must = total out.
$$Q_T = Q_1 +Q_2$$
From $Q = CV$ 
$$\begin{array}{c}
C_TV = C_1V + C_2V \\ 
C_T = C_1 + C_2
\end{array}$$




