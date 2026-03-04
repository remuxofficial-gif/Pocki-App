import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { lessons } from "../../data/studentData";
import { CheckCircle2, Circle, Clock, BookOpen } from "lucide-react";

export function LearnScreen() {
  const completedLessons = lessons.filter(l => l.completed).length;
  const totalLessons = lessons.length;
  const progressPercent = (completedLessons / totalLessons) * 100;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-blue-800 text-white px-6 pt-12 pb-8 rounded-b-3xl shadow-lg">
        <h1 className="text-2xl font-bold mb-2">Learn to Invest</h1>
        <p className="text-blue-100">Build your financial knowledge</p>
      </div>

      <div className="px-6 -mt-4">
        {/* Progress Card */}
        <Card className="mb-6 shadow-lg">
          <CardContent className="p-5">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-sm text-muted-foreground">Your Progress</p>
                <p className="text-2xl font-bold">{completedLessons} of {totalLessons}</p>
              </div>
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-accent" />
              </div>
            </div>
            <Progress value={progressPercent} className="h-2" />
            <p className="text-xs text-muted-foreground mt-2">
              {progressPercent.toFixed(0)}% complete
            </p>
          </CardContent>
        </Card>

        {/* Lessons List */}
        <div>
          <h2 className="font-semibold mb-3">All Lessons</h2>
          <div className="space-y-3 pb-6">
            {lessons.map((lesson) => (
              <Card 
                key={lesson.id}
                className={`hover:shadow-md transition-shadow cursor-pointer ${
                  lesson.completed ? 'border-accent/30 bg-accent/5' : ''
                }`}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    {/* Status Icon */}
                    <div className="flex-shrink-0 pt-1">
                      {lesson.completed ? (
                        <CheckCircle2 className="w-6 h-6 text-accent" />
                      ) : (
                        <Circle className="w-6 h-6 text-muted-foreground" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-semibold leading-tight">{lesson.title}</h3>
                        {lesson.completed && (
                          <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30 flex-shrink-0">
                            Completed
                          </Badge>
                        )}
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-3">
                        {lesson.description}
                      </p>

                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{lesson.duration}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Info Card */}
        <Card className="mb-6 bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0">
          <CardContent className="p-5">
            <h3 className="font-bold mb-2">💡 Did you know?</h3>
            <p className="text-sm text-purple-100">
              Completing lessons helps you make better investment decisions and understand market movements.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
