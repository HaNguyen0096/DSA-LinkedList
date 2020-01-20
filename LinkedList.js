'use strict';

class _Node {
    constructor(value, next) {
        this.value = value,
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
        console.log(this.head);
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while(tempNode.next !== null){
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }
    find(item) { 
        let currNode = this.head;
        if (!this.head) {
            return null;
        }
        while (currNode.value !== item) {
            if (currNode.next === null) {
                return null;
            }
            else { 
                currNode = currNode.next;
            }
        }
        return currNode;
    }
    remove(item){ 
        if (!this.head) {
            return null;
        }
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        let currNode = this.head;
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) { 
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }

    reverseList(list){
        if (!list){
            return null;
        }
        else if (!list.head.next) {
            return list;
        }
        else {
            let secondNode = null;
            let currNode = list.head;
            while (currNode !== null) {
                let firstNode = currNode.next;
                currNode.next = secondNode;
                secondNode = currNode;
                currNode = firstNode;
            }
            list.head = secondNode;
            return list;
        }
    }
    findFromEnd(n){
        let count=0;
        let temp=this.head;
        while (temp != null){
            temp=temp.next;
            count++;
        }
        
        if (count < n){
            return null;
        }

        temp=this.head;
        for (let i=0; i<count-n+1;i++){
            temp=temp.next;
        }
        return temp.value;
    }

    findMiddle(){
        if(!this.head){
            return null;
        }
        let count=0;
        let temp=this.head;
        while (temp != null){
            temp=temp.next;
            count++;
        }

        temp=this.head;
        for (let i=0; i<=count/2;i++){
            temp=temp.next;
        }
        return temp.value;
    }

    findCycle(){
        if(!this.head){
            return "There is no cycle";
        }
        let temp=this.head;
        while (temp != null){
            let currNode=temp.next;
            if (currNode===temp.value){
                return 'there is a cycle';
            }
            temp = currNode;
        }
        return 'there is no cycle';

    }
}


const SLL = new LinkedList;

function main() {
    const SLL = new LinkedList;
    SLL.insertLast('Apollo');
    SLL.insertLast('Boomer');
    SLL.insertLast('Helo');
    SLL.insertLast('Husker');
    SLL.insertLast('Starbuck');
    SLL.insertLast('Tauhida');
    SLL.remove('Husker');
    console.log(SLL.reverseList(SLL));
    console.log(SLL.findFromEnd(4));
    console.log(SLL.findMiddle());
    console.log(SLL.findCycle());
}
main();




