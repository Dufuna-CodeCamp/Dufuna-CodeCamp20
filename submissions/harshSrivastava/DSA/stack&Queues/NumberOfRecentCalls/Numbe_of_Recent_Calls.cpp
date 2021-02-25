class RecentCounter {
public:
    RecentCounter() {  
    }
    int ping(int t) {
        data.push(t);
        while(data.front()<t-3000)
            data.pop();
        
        return data.size();
    }
    private:
    queue<int> data;
};
