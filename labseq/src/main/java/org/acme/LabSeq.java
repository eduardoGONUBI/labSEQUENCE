package org.acme;

import java.util.HashMap;
import java.util.Map;

public class LabSeq {

    private Map<Integer, Integer> cache = new HashMap<>();

    public int calculateLabSeq(int n) {

        if (cache.containsKey(n)) {
            return cache.get(n);
        }
        if (n == 0) {
            cache.put(0, 0);
            return 0;
        } else if (n == 1) {
            cache.put(1, 1);
            return 1;
        } else if (n == 2) {
            cache.put(2, 0);
            return 0;
        } else if (n == 3) {
            cache.put(3, 1);
            return 1;
        } else {
            int value = calculateLabSeq(n - 4) + calculateLabSeq(n - 3);
            cache.put(n, value);
            return value;
        }
    }
}
