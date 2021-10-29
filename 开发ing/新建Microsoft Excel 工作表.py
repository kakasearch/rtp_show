from xlpython import *

@xlfunc
def xxnc_df4b(d,notfound):
	if d <=0:
		return 85+d*0.8
	else:
		x = [-1.15,-0.09,0.96,2.07,3.16,4.41,6.05,8.65,12.91]
		y = [100,90,80,70,60,50,40,30,20]
		for i in  range(len(x)-1):
			if x[i]<=d and x[i+1]>=d:

				return y[i]+(d-x[i])*(y[i+1]-y[i])/(x[i+1]-x[i])
		return notfound
@xlfunc
def reverse_pd(d):
	#反转坡度
	data=[]
	for i in d:
		item = list(i)
		item[1] = -item[1]
		data.append(item)
	data = data[::-1]
	return tuple(data)

@xlfunc
def xxnc(xs,ys,d):
	#xs,ys递增
	if xs[-1]<xs[0]:
		xs = xs[::-1]
		ys = ys[::-1]
	for i in  range(len(xs)-1):
		if xs[i]<=d and xs[i+1]>=d:
			return ys[i]+(d-xs[i])*(ys[i+1]-ys[i])/(xs[i+1]-xs[i])
	return "error:超限"

@xlfunc
def tongji(d):
	a=0
	b = 0
	for i in d:
		a += float(i[0])
		b+=float(i[1])
	return f"本页路堤 {int(a)},路堑{int(b)}"




@xlfunc
def cal_lujian(d,start,langs,podus):
	sum_ = 0
	gao = start
	for i in range(len(langs)):
		if sum_<=d<=sum_+langs[i]:
			point = d-sum_
			gao += point*podus[i]/1000
			return gao
		else:
			sum_ += langs[i]
			gao += langs[i]*podus[i]/1000
	return "error:超限"




@xlfunc
def test(d):

	return(str(d))