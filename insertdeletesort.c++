//we use array to insert an elemant in a heap
//for max heap
//store the elements in the array except oth index
//insert the inserted element at last of the array
//take it to correct position by comparing with its parent child
//if i is the index of an element then leaving index 0
//2i->index of left child;
//2i+1->index of ots right child
//i/2->indx of its parent
 //deletion all take place at root 
 #include<stdio.h>
 void print(int a[],int n)
 {
    for (int i=1;i<n;i++)
    {
    printf("%d ",a[i]);
 }
 }
void swap(int *a,int *b)
{
    int temp=*a;
    *a=*b;
    *b=temp;
}
 void insert(int a[],int n)
 {
    int i=n;
    while(i>1)
    {
        if(a[i]>a[i/2])
        {
            swap(&a[i],&a[i/2]);
            i=i/2;
        }
        else break;
    }
    
 }
 void delet(int a[],int n)
 {
    // always root is deleted in a heap
    int temp=a[1];
         a[1]=a[n];
         int i=1;
         int j=2*i;
         while(j<n)
         {
            if(a[j]<a[j+1])
            {
                //rchild is greater
                j=j+1;
            }
            if(a[j]>a[i])
            {
                swap(&a[j],&a[i]);
                i=j;
                j=2*j;
            }
            else break;
         }
         a[n]=temp;
 }
 void heapify(int A[],int n,int i){
    int largest=i;
    int lchild=2*i;
    int rchild=(2*i)+1;
    if(lchild<n && A[lchild]>A[largest]){
      largest=lchild;
    }
    if(rchild<n && A[rchild]>A[largest]){
        largest=rchild;
    }
    if(largest!=i){
        swap(&A[largest],&A[i]);
        heapify(A,n,largest);
    }
    
}

 int main()
 {

    int h[]={0,10,20,30,25,5,40,35};
    int n=sizeof(h)/4;
    //consider 1st eleement is already in heap;
    for(int i=2;i<n;i++)
    {
        insert(h,i);
    }
    print(h,n);
    printf("\nafter deletion sorted heap is :");
    for(int i=1;i<n;i++)
    {
        delet(h,n-i);
    }
     print(h,n);
    return 0;
 }