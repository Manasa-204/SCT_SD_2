import java.util.*;
public class Task {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int r=(int)(Math.random()*10)+1;
        boolean guess=false;
        int count =1;
        for(int i=0;i<5;i++){
            System.out.println("Enter the number you guess(from 1 to 20)");
            int n=sc.nextInt();
            if(rnd(n,r,count)){
                guess=true;
                break;
            }
            count++;
        }
        if(!guess){
            System.out.println("Oops! better luck next time \nThe number was "+r);
        }
        sc.close();
    }
    public static boolean rnd(int n,int r,int c){
        if( r== n){
            System.out.println("You guessed right at attempt "+c+" ,its indeed "+n+"!");
            return true;
        }
        else if(r<n){
            System.out.println("Number is lower ");
            return false;
        }
        else{
            System.out.println("Number is greater ");
            return false;
        }
    }
}