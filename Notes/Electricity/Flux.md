
>[!summary]
Flux is how much of something flow through a surface (Measurement )
It depends on the orientation we use as the surface and the flow 
>
For 3D we imagine it as separate 2D closed surfaces 
>
Key equation:
$\phi = E\cdot A$

# What is Flux
Flux is seeing how much of something  flows in or out an imaginary surface. **It is a measurement, similar to volume and area**
We define this as $$\phi = \oint E\cdot dA$$Where A is an imagery area.

 Flux for 3D objects is positive when the field lines leaving the surface and is negative for field lines entering a volume
## Orientation 
Flux is dependent on the orientation that our imagery surface covers. This is because of the dot product.
![[flu_1.png]]
[^1]
>[!note] Explanation
Example of an electric field passing through some surface (Assume its imagery)

To determine how the orientation affects our flux imagine a normal vector coming on the imagery area.
Our flux is zero when the angle between the area normal and electric field is 90 degrees. (The area would have been placed flat not penetrating that field)

![[flu_2.png]]
[^1]
>[!note] Explanation
Example of a electric field passing through an imagry field. In this case the flux would be:
$\phi = EAcos(\theta)$ 

# Flux in Closed Surfaces (3D)
If we want to find the flux coming in out a closed surface we use the same idea  for finding the flux in a electric field, and now consider how that flux is entering or leaving that surface.

For flux **entering** a **surface** we assume this as **negative** flux
For flux **leaving** a **surface** we assume this as **positive** flux.

>[!example]
![[flu_3.png]]
If we assume this image is a rectangle with a electric file direction downward. (Assume E = 3, side length = 2 and longer length = 3)
>
For all the sides perp to the electric field we know the flux will be zero (Area normal is perp to electric field)
>
We only calcaute the flux through the top and bottom surface.
$$\begin{array}{c} 
\phi_{top} = E\cdot A =  3 \cdot 3 \cdot cos(0) = -9 
\quad\text{Entering} \\
\phi_{bottom} = E\cdot A = 3 \cdot 3 \cdot cos(0)= 9 \quad\text{Leaving} \\ \\
\phi_{total} = \phi_{top} + \phi_{bottom} = 0
\end{array}$$

[^1]: Taken from https://tikz.net/electric_field_plane/ by Izaak Neutelings (November, 2018)
