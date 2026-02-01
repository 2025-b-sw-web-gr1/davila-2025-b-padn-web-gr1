def suma(a, b):
    
    return a + b

def resta(a, b):
   
    return a - b

def multiplicacion(a, b):
    
    return a * b

def division(a, b):

    if b == 0:
        return "Error: No se puede dividir por cero"
    return a / b

def potenciacion(a, b):
    return a ** b



def calculadora():
    
    while True:
        print("       CALCULADORA INTERACTIVA")
        print("1. Suma")
        print("2. Resta")
        print("3. Multiplicación")
        print("4. División")
        print("5. Potenciación")
        
        opcion = input("\nSeleccione una operación (1-5): ")
        
        num1 = float(input("Ingrese el primer número: "))
        num2 = float(input("Ingrese el segundo número: "))
        
        if opcion == "1":
            resultado = suma(num1, num2)
            operacion = "+"
        elif opcion == "2":
            resultado = resta(num1, num2)
            operacion = "-"
        elif opcion == "3":
            resultado = multiplicacion(num1, num2)
            operacion = "*"
        elif opcion == "4":
            resultado = division(num1, num2)
            operacion = "/"
        elif opcion == "5":
            break
        
        print(f"\nResultado: {num1} {operacion} {num2} = {resultado}")
        
        continuar = input("\nDesea realizar otra operación?: ")
        if continuar.lower() != "y":
            print("\ncerrando")
            break

if __name__ == "__main__":
    calculadora()
